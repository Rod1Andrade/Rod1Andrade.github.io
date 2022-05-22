import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GitHubAPIService } from './services/api/github.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private githubProjects: any[] = []

  constructor(
    private _snackBar: MatSnackBar,
    private gitHubAPIService: GitHubAPIService
  ) {
  }

  ngOnInit(): void {
    this.gitHubAPIService.getProjects().subscribe(observer => {
      this.githubProjects = observer
    })
  }

  public getLastProjects(quantity: number = 4): any[] {
    return this.githubProjects
      .filter(value => value.stargazers_count > 0)
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public openOnGithub(link: string) {
    window.open(link, "_blank")
  }
}
