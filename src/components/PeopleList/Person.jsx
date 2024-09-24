function Person({name, age, children}){
    return <div className="person">
        <p>{name}</p>
        <p>{age}</p>
        {children}
    </div>
}

export default Person