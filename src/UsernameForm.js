import react, {Component} from 'react'


export default class UsernameForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            username : e.target.value,
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.onChange(this.state.username)
    }

    render (){
        return( 
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Username" onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
