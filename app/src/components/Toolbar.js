export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className="toolbar">
            {filters.map((filter) => 
                <button 
                    key={filter}
                    className={filter === selected ? 'active' : 'inactive'}
                    onClick={() => {onSelectFilter(filter)}}>
                        {filter}
                </button>
            )}
        </div>       
    )
}