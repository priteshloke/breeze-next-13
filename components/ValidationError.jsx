function ValidationError({ errors, field }) {
    return errors?.[field]?.length &&
        <div className="alert alert-danger" role="alert">
            <ul>
                {errors[field].map((error, index) => {
                    return (<li key={index}>{error}</li>)
                })}
            </ul>
        </div>
}



export default ValidationError