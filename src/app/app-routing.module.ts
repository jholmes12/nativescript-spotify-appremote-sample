import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
    { path: "", redirectTo: "/test", pathMatch: "full" },
    { path: "test", component: TestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
