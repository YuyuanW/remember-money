import React from 'react';

// require('icons/chart.svg');
// require('icons/money.svg');
// require('icons/tags.svg')

//导入文件夹
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../iconsSVG', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = { name?: string; } & React.SVGAttributes<SVGElement>

const Icon = (props: Props)=>{
    const {name,children,className,...rest} = props
   return (
    <svg {...rest} className={`svgClassName ${className?className:''}`}>
        {props.name &&<use xlinkHref={'#'+props.name}/> }
    </svg>
   )
}
export default Icon;