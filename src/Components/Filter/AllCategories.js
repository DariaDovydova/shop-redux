import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>What kind of food do you like?</h1>
            <Filter />

            {["SEAFOOD", "ITALIAN", "APPETIZERS", "SALADS", "ALL"]
            .map((category, index) => <Filter key={index} category={category} />)}
        </div>
    )
}

export default AllCategories;