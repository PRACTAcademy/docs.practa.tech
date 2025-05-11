import { GithubRepositories } from "../GithubRepositories";
import { RepoLayout } from "../RepoLayout";
import "./styles.css"

export function HomepageFeatures() {
    return(
        <RepoLayout>
            <GithubRepositories />
        </RepoLayout>
    );
}