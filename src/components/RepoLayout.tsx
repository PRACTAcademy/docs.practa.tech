import { ReactNode } from "react";

type RepoLayoutProps = {
    children: ReactNode;
};

export function RepoLayout({ children }: RepoLayoutProps) {
    return (
        <div className="bento-grid">
            {children}
        </div>
    );
}