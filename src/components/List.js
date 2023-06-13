import ListItem from './ListItem';


const List = ({items, onDeleteRow, onReset}) => {





    return (
        <div className="List">
            {items?.map(item => (
                <ListItem item={item} key={item.id} onDeleteRow={onDeleteRow} onReset={onReset}/>
            ))}
        </div>
    )
}

export default List;