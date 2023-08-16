import ShortUrlItem from "./ShortUrlItem/ShortUrlItem"

export default function UrlList (props) {

  console.log(props.array);


  
  return (
    <ul>
      {props.array.map((item, index) => <ShortUrlItem data={item} key={index}/>)}
    </ul>
  )
}