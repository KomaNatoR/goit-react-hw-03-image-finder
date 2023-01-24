import errorImg from "./imageTemplate.jpg";

export default function PokErroeView({message}) {
    return (
        <div role="alert">
            <img src={errorImg} alt="sorry" width="240" />
            <p>{message}</p>
        </div>
    );
};