import { useRouteError } from "react-router-dom";


const Error_Page = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex justify-center w-full mt-10 items-center">
            <div className="text-white text-center space-y-4">
                <h1 className="text-4xl">Oops!</h1>
                <p>Sorry! an unexpected error has occurred</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error_Page;