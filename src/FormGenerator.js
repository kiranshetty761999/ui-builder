const FormGenerator = (props) => {
 
  if (props.data.tag === "div") {
    return (
  
            <div style={props.data.style}>
                {props?.data?.text}
                {props?.data?.children?.length > 0 && props?.data?.children?.map((item, index) => (
                        <FormGenerator
                            autoFillOperation={props.autoFillOperation}
                            data={item}
                            change={props.change}
                            formIndex={props.formIndex}
                            sectionIndex={props.sectionIndex}
                        />
                ))}
            </div>
  
    );
  }

  if (props.data.tag === "button")
    return (
      <>
            <button  style={props.data.style}>{props.data.text}</button>
           
      </>

    )
  if (props.data.tag === "p") {

    return (
      <>
            <p style={props.data.style}>{props.data.text}</p>
      </>
    );
  }


  if (props.data.tag === "span") {
    return (
        <>
            <span style={props.data.style}>{props.data.text}</span>
             { props?.data?.children?.length>0 && props.data.children?.map((item, index) => (
                <FormGenerator
                    autoFillOperation={props.autoFillOperation}
                    data={item}
                    onChange={props.onChange}
                    formIndex={props.formIndex}
                    sectionIndex={props.sectionIndex}
                />
            ))}
        </>
    );
}



  if (props.data.tag === "input")
    return (
      <>
            <input
              style={props.data.style}
              id="outlined-basic"
              placeholder={props.data.placeholder}
              type={props?.data?.type}
              min = {props?.data?.min}
              max = {props?.data?.max}
              value = {props?.data?.value}
              onChange={(e) => props.change(props, e.target.value)}
            />
      </>
    )
}



export default FormGenerator;