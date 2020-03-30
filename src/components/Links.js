import React, { Component } from 'react';
import LinksExtend from "./LinksExtend"



class Links extends Component {
    constructor(){
        super()
        this.state = {
            output: "",
            title: "",
            return: ""                           
        }
        this.Extend=this.Extend.bind(this)
      }
    Extend(category){
        this.setState({title:category})
        this.setState({output:<LinksExtend extendCategory={category} />})
        this.setState({
            return:
                <div>                    
                <br />
                    <div className="Links-category"
                        onClick={() => this.resetLinks()}>
                        Return to Categories
                    </div>
                </div>
            })
        console.log("Extend worked! - "+category)        
    }
    resetLinks (){
        this.setState({title: "Categories"})
        this.setState({
            output:
                <div>                    
                    <div className="Links-category"
                        onClick={() => this.Extend("Tech Tickets")}>                        
                        Tech Tickets
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Logins")}>                        
                        Logins
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("District")}>
                        District
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Technology")}>
                        Technology
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Software")}>
                        Software
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Guides")}>
                        Guides
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Communication")}>
                        Communication
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("eLearning")}>
                        eLearning
                    </div>
                    <div className="Links-category"
                        onClick={() => this.Extend("Website Statuses")}>
                        Website Statuses
                    </div>
                </div>
        })
        this.setState({return:""})
    }
    componentDidMount(){
        this.resetLinks()
    }
    render(){        
        return (
            <div className="App-body-area" >
                <div className="Table-header">
                    {this.state.title}
                </div>
                {this.state.output}
                {this.state.return}
            </div>
        );
    }
}
export default Links