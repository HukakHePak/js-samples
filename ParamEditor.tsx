import * as React from "react";
import {ChangeEvent, ReactComponentElement} from "react";

export interface Color {
    hex: string;
}

export interface Param {
    id: number;
    name: string;
    type: string;
}

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

interface Props {
    params: Param[];
    model: Model;
    component?: (value: ParamValue, onChange: (e: ChangeEvent<HTMLInputElement>) => void) => React.Component<any, any>;
}

export class ParamEditor extends React.Component<Props, Model> {
    constructor(props: Props) {
        super(props);

        this.state = props.model;
    }

    public getModel(): Model {
        return this.state;
    }

    changeHandler(e: ChangeEvent<HTMLInputElement>): void {
        const params = [...this.state.paramValues];
        params[0].value = e.target.value;

        this.setState({...this.state, paramValues: params});
    }

    componentSelector(param: Param): ReactComponentElement<any> {
        let component;

        switch (param.type) {
            case 'string':
                component = <input type="text"
                                   onChange={(e) => this.changeHandler.call(this, e)}
                                   value={this.state.paramValues.find((value) =>
                                       value.paramId === param.id)?.value}
                />;
                break;

            default:
                break;
        }


        return <div key={param.id}>
            <span>{param.name}</span>
            {component}
        </div>;
    }

    render() {
        return (
            <div>
                <>{this.props.params.map((item) => this.componentSelector.call(this, item))}</>
            </div>
        );
    }
}
