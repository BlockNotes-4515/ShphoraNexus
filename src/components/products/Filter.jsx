import { FormControl, InputLabel, MenuItem, Select, Tooltip, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FiArrowUp, FiArrowDown, FiRefreshCw, FiSearch } from "react-icons/fi";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Filter = ({ categories = [] }) => {

    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const [category, setCategory] = useState("all");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const currentCategory = searchParams.get("category") || "all";
        const currentSortOrder = searchParams.get("sortby") || "asc";
        const currentSearchTerm = searchParams.get("keyword") || "";

        setCategory(currentCategory || "all"); // ✅ never undefined
        setSortOrder(currentSortOrder);
        setSearchTerm(currentSearchTerm);
    }, [searchParams]);

    useEffect(() => {
        const handler = setTimeout(() => {
            const newParams = new URLSearchParams(searchParams);

            if (searchTerm) {
                newParams.set("keyword", searchTerm);
            } else {
                newParams.delete("keyword");
            }

            navigate(`${pathname}?${newParams.toString()}`);
        }, 700);

        return () => clearTimeout(handler);
    }, [searchParams, searchTerm, navigate, pathname]);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value || "all"; // ✅ safety

        const newParams = new URLSearchParams(searchParams);

        if (selectedCategory === "all") {
            newParams.delete("category");
        } else {
            newParams.set("category", selectedCategory);
        }

        navigate(`${pathname}?${newParams.toString()}`);
        setCategory(selectedCategory);
    };

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => {
            const newOrder = prevOrder === "asc" ? "desc" : "asc";

            const newParams = new URLSearchParams(searchParams);
            newParams.set("sortby", newOrder);

            navigate(`${pathname}?${newParams.toString()}`);
            return newOrder;
        });
    };

    const handleClearFilters = () => {
        navigate({ pathname: window.location.pathname });
        setCategory("all"); // ✅ reset safely
        setSearchTerm("");
        setSortOrder("asc");
    };

    return (
        <div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-4">

            {/* SEARCH BAR */}
            <div className="relative flex items-center 2xl:w-[450px] sm:w-[420px] w-full">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm || ""} // ✅ prevent undefined
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
                />
                <FiSearch className="absolute left-3 text-slate-900 top-1/2 -translate-y-1/2" size={20} />
            </div>

            {/* CATEGORY + SORT */}
            <div className="flex sm:flex-row flex-col gap-4 items-center">
                <FormControl variant="outlined" size="small">
                    <InputLabel id="category-select-label">Category</InputLabel>

                    <Select
                        labelId="category-select-label"
                        value={category || "all"} // ✅ FIX
                        onChange={handleCategoryChange}
                        label="Category"
                        className="min-w-[120px]"
                    >
                        <MenuItem value="all">All</MenuItem>

                        {categories.map((item) => (
                            <MenuItem
                                key={item.categoryId}
                                value={item.categoryName} // ✅ FIXED
                            >
                                {item.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Tooltip title={`Sorted by price: ${sortOrder}`}>
                    <Button
                        variant="contained"
                        onClick={toggleSortOrder}
                        color="primary"
                        className="flex items-center gap-2 h-10"
                    >
                        Sort By
                        {sortOrder === "asc" ? <FiArrowUp size={20} /> : <FiArrowDown size={20} />}
                    </Button>
                </Tooltip>

                <button
                    className="flex items-center gap-2 bg-rose-900 text-white px-3 py-2 rounded-md shadow-md"
                    onClick={handleClearFilters}
                >
                    <FiRefreshCw size={16} />
                    <span>Clear Filter</span>
                </button>
            </div>
        </div>
    );
};

export default Filter;