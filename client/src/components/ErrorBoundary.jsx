import { Component } from "react";
import PageNotFound from "./404/404";

export default class ErrorBoundary extends Component{

    constructor(){
        super()

        this.state = {
            hasError: false,
        }
    }
    static getDerivedStateFromError(err){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,errorInfo){
    }

    render() {
        if (this.state.hasError) {
            return <PageNotFound />
        }
        return this.props.children
    }
}