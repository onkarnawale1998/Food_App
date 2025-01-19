const Error = ({ error }) => {
    return (
        <div>
            <h2>Something Went Wrong</h2>
            <p>{JSON.stringify(error.message)}</p>
        </div>
    );
};

export default Error;