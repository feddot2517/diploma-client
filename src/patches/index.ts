import { LoggerDefaultData } from "./logger/Logger";
import {ListDefaultData} from "./list/List";
import {AntCardDefaultData} from "./card/Card";
import {RenderDefaultData} from "./render/Render";
import {ValueDefaultData} from "./value/Value";
import {PlusDefaultData} from "./calc/Plus";
import {HtmlHeaderDefaultData} from "./html/Header";
import {RouterDefaultData} from "./react/Router";
import {RouteDefaultData} from "./react/Route";
import {ComponentDefaultData} from "./react/Component";
import {RenderHtmlDefaultData} from "./render/RenderHtml";


export const patches = [
    LoggerDefaultData,
    ListDefaultData,
    AntCardDefaultData,
    RenderDefaultData,
    ValueDefaultData,
    PlusDefaultData,
    HtmlHeaderDefaultData,
    RouterDefaultData,
    RouteDefaultData,
    ComponentDefaultData,
    RenderHtmlDefaultData
]