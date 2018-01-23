import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SparqlService } from './_services/sparql.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPatternComponent } from './add-pattern/add-pattern.component';
import { GithubService } from './_services/github.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdfGraphComponent } from './rdf-graph/rdf-graph.component';
import { SafeHtmlPipe } from './_pipes/safe-html.pipe';
import { RdfaService } from './_services/rdfa.service';
import { InstanceCreatorComponent } from './instance-creator/instance-creator.component';
import { ClassesOverviewComponent } from './classes-overview/classes-overview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddPropertyComponent } from './modal-add-property/modal-add-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddPatternComponent,
    RdfGraphComponent,
    SafeHtmlPipe,
    InstanceCreatorComponent,
    ClassesOverviewComponent,
    ModalAddPropertyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [SparqlService, GithubService, RdfaService],
  entryComponents: [
    ModalAddPropertyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
