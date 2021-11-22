import React from "react";
import { connect } from "react-redux"

const My=(props)=>{

    return(
        <div>
            {console.log(props.todos)}
            {console.log(props.name)}

        </div>
    );
}

const mapStateToProps=(store)=>{
    return{
        todos:store.todos,
        name:store.name,

    }
}

export default connect(mapStateToProps)(My)