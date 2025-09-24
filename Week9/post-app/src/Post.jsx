
const style = { width: 400, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

export function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}> 
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 50,
        height: 50,
        borderRadius: 30
      }} />
      <div style={{marginLeft: 10}}>
        <div style={{fontSize : 20}}>
          <b>
            {name}
          </b>
        </div>
        <div style={{fontSize : 12}}>
          <div>{subtitle}</div>
          {(time !== undefined) ? <div style={{display: 'flex'}}>
            <div>{time}</div>      
            <img src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="} style={{width: 12, height: 12}} />
          </div> : null}
        </div>
      </div>
    </div>
    <div style={{fontSize: 18}}>
     {description}
    </div>
 </div>
}