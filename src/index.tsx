import * as React from "react";
import allPropClasses from "./modules";
import { isValidClassName } from "./utils";

const Ui: React.SFC<IUiProps> = ({ as: Component, className, ...props }) => {
  let passThroughProps = {};
  let propClasses = [className];

  Object.keys(props).forEach(key => {
    if (!allPropClasses.has(key)) {
        passThroughProps[key] = props[key];
    } else if (!!props[key]) {
        propClasses.push(key);
    }
  });

  return <Component
    {...passThroughProps}
    className={propClasses.filter(isValidClassName).join(" ")}
  />
};

Ui.defaultProps = {
    as: "div",
    className: "",
};

export interface IUiProps {
    as?: any;
    className?: string;
}

export const A = p => <Ui as="a" {...p} />;
export const Abbr = p => <Ui as="abbr" {...p} />;
export const Address = p => <Ui as="address" {...p} />;
export const Area = p => <Ui as="area" {...p} />;
export const Article = p => <Ui as="article" {...p} />;
export const Aside = p => <Ui as="aside" {...p} />;
export const Audio = p => <Ui as="audio" {...p} />;
export const B = p => <Ui as="b" {...p} />;
export const Base = p => <Ui as="base" {...p} />;
export const Bdi = p => <Ui as="bdi" {...p} />;
export const Bdo = p => <Ui as="bdo" {...p} />;
export const Big = p => <Ui as="big" {...p} />;
export const Blockquote = p => <Ui as="blockquote" {...p} />;
export const Body = p => <Ui as="body" {...p} />;
export const Br = p => <Ui as="br" {...p} />;
export const Button = p => <Ui as="button" {...p} />;
export const Canvas = p => <Ui as="canvas" {...p} />;
export const Caption = p => <Ui as="caption" {...p} />;
export const Cite = p => <Ui as="cite" {...p} />;
export const Code = p => <Ui as="code" {...p} />;
export const Col = p => <Ui as="col" {...p} />;
export const Colgroup = p => <Ui as="colgroup" {...p} />;
export const Data = p => <Ui as="data" {...p} />;
export const Datalist = p => <Ui as="datalist" {...p} />;
export const Dd = p => <Ui as="dd" {...p} />;
export const Del = p => <Ui as="del" {...p} />;
export const Details = p => <Ui as="details" {...p} />;
export const Dfn = p => <Ui as="dfn" {...p} />;
export const Dialog = p => <Ui as="dialog" {...p} />;
export const Div = p => <Ui as="div" {...p} />;
export const Dl = p => <Ui as="dl" {...p} />;
export const Dt = p => <Ui as="dt" {...p} />;
export const Em = p => <Ui as="em" {...p} />;
export const Embed = p => <Ui as="embed" {...p} />;
export const Fieldset = p => <Ui as="fieldset" {...p} />;
export const Figcaption = p => <Ui as="figcaption" {...p} />;
export const Figure = p => <Ui as="figure" {...p} />;
export const Footer = p => <Ui as="footer" {...p} />;
export const Form = p => <Ui as="form" {...p} />;
export const H1 = p => <Ui as="h1" {...p} />;
export const H2 = p => <Ui as="h2" {...p} />;
export const H3 = p => <Ui as="h3" {...p} />;
export const H4 = p => <Ui as="h4" {...p} />;
export const H5 = p => <Ui as="h5" {...p} />;
export const H6 = p => <Ui as="h6" {...p} />;
export const Head = p => <Ui as="head" {...p} />;
export const Header = p => <Ui as="header" {...p} />;
export const Hgroup = p => <Ui as="hgroup" {...p} />;
export const Hr = p => <Ui as="hr" {...p} />;
export const Html = p => <Ui as="html" {...p} />;
export const I = p => <Ui as="i" {...p} />;
export const Iframe = p => <Ui as="iframe" {...p} />;
export const Img = p => <Ui as="img" {...p} />;
export const Input = p => <Ui as="input" {...p} />;
export const Ins = p => <Ui as="ins" {...p} />;
export const Kbd = p => <Ui as="kbd" {...p} />;
export const Keygen = p => <Ui as="keygen" {...p} />;
export const Label = p => <Ui as="label" {...p} />;
export const Legend = p => <Ui as="legend" {...p} />;
export const Li = p => <Ui as="li" {...p} />;
export const Link = p => <Ui as="link" {...p} />;
export const Main = p => <Ui as="main" {...p} />;
export const Map = p => <Ui as="map" {...p} />;
export const Mark = p => <Ui as="mark" {...p} />;
export const Marquee = p => <Ui as="marquee" {...p} />;
export const Menu = p => <Ui as="menu" {...p} />;
export const Menuitem = p => <Ui as="menuitem" {...p} />;
export const Meta = p => <Ui as="meta" {...p} />;
export const Meter = p => <Ui as="meter" {...p} />;
export const Nav = p => <Ui as="nav" {...p} />;
export const Noscript = p => <Ui as="noscript" {...p} />;
// export const Object = p => <Ui as="object" {...p} />;
export const Ol = p => <Ui as="ol" {...p} />;
export const Optgroup = p => <Ui as="optgroup" {...p} />;
export const Option = p => <Ui as="option" {...p} />;
export const Output = p => <Ui as="output" {...p} />;
export const P = p => <Ui as="p" {...p} />;
export const Param = p => <Ui as="param" {...p} />;
export const Picture = p => <Ui as="picture" {...p} />;
export const Pre = p => <Ui as="pre" {...p} />;
export const Progress = p => <Ui as="progress" {...p} />;
export const Q = p => <Ui as="q" {...p} />;
export const Rp = p => <Ui as="rp" {...p} />;
export const Rt = p => <Ui as="rt" {...p} />;
export const Ruby = p => <Ui as="ruby" {...p} />;
export const S = p => <Ui as="s" {...p} />;
export const Samp = p => <Ui as="samp" {...p} />;
export const Script = p => <Ui as="script" {...p} />;
export const Section = p => <Ui as="section" {...p} />;
export const Select = p => <Ui as="select" {...p} />;
export const Small = p => <Ui as="small" {...p} />;
export const Source = p => <Ui as="source" {...p} />;
export const Span = p => <Ui as="span" {...p} />;
export const Strong = p => <Ui as="strong" {...p} />;
export const Style = p => <Ui as="style" {...p} />;
export const Sub = p => <Ui as="sub" {...p} />;
export const Summary = p => <Ui as="summary" {...p} />;
export const Sup = p => <Ui as="sup" {...p} />;
export const Table = p => <Ui as="table" {...p} />;
export const Tbody = p => <Ui as="tbody" {...p} />;
export const Td = p => <Ui as="td" {...p} />;
export const Textarea = p => <Ui as="textarea" {...p} />;
export const Tfoot = p => <Ui as="tfoot" {...p} />;
export const Th = p => <Ui as="th" {...p} />;
export const Thead = p => <Ui as="thead" {...p} />;
export const Time = p => <Ui as="time" {...p} />;
export const Title = p => <Ui as="title" {...p} />;
export const Tr = p => <Ui as="tr" {...p} />;
export const Track = p => <Ui as="track" {...p} />;
export const U = p => <Ui as="u" {...p} />;
export const Ul = p => <Ui as="ul" {...p} />;
export const Var = p => <Ui as="var" {...p} />;
export const Video = p => <Ui as="video" {...p} />;
export const Wbr = p => <Ui as="wbr" {...p} />;

// SVG
export const Circle = p => <Ui as="circle" {...p} />;
export const ClipPath = p => <Ui as="clipPath" {...p} />;
export const Defs = p => <Ui as="defs" {...p} />;
export const Ellipse = p => <Ui as="ellipse" {...p} />;
export const G = p => <Ui as="g" {...p} />;
export const Image = p => <Ui as="image" {...p} />;
export const Line = p => <Ui as="line" {...p} />;
export const LinearGradient = p => <Ui as="linearGradient" {...p} />;
export const Mask = p => <Ui as="mask" {...p} />;
export const Path = p => <Ui as="path" {...p} />;
export const Pattern = p => <Ui as="pattern" {...p} />;
export const Polygon = p => <Ui as="polygon" {...p} />;
export const Polyline = p => <Ui as="polyline" {...p} />;
export const RadialGradient = p => <Ui as="radialGradient" {...p} />;
export const Rect = p => <Ui as="rect" {...p} />;
export const Stop = p => <Ui as="stop" {...p} />;
export const Svg = p => <Ui as="svg" {...p} />;
export const Text = p => <Ui as="text" {...p} />;
export const Tspan = p => <Ui as="tspan" {...p} />;
