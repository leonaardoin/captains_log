const React = require("react");

class Index extends React.Component {
    render(){
       const {logs} = this.props;
       return(
           <div>
            <ul>
                {logs.map((log, i) => {
                    const createdDate = new Date(log.createdAt);
                    const formattedDate = createdDate.toLocaleString();

                    return(
                        <div>
                            <li key={i}>
                                <a href={`logs/${log._id}`}>{log.title}</a>
                                <p>Created at: {formattedDate}</p>
                            </li>
                            <a href={`logs/${log._id}/edit`}> Edit Log Entry</a>
                            <br/><br/>
                            <form action= {`/logs/${log._id}?_method=DELETE`} method="POST">
                            <input type = "submit" value="Delete Log Entry" />
                            </form> 
                            <br/>
                        </div> 
                    )
                })}
            </ul>
                      
            <a href={'/logs/new'}> Create New Log Entry</a>
        </div>
       ) 
    }

}
module.exports = Index