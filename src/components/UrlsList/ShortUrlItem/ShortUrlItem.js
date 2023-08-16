import CopyButton from "../../UI/Button/Button"

export default function ShortUrlItem(props) {
  return (
    <li className="url">
      <span className="url__original">{props.data.original}</span>

      <div className="url__short">
        <span>{props.data.short}</span>
        <CopyButton text={props.data.short}/>
      </div>
    </li>
  )
};

