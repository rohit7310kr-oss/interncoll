const Error = ({ message = "An error occurred", onRetry }) => {
  return (
    <div>
      <div>
        <div>⚠️</div>
        <h2>Oops! Something went wrong</h2>
        <p>{message}</p>
        {onRetry && <button onClick={onRetry}>Try Again</button>}
      </div>
    </div>
  );
};

export default Error;
