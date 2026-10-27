<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio conventions
- Keep resume data in the shared resume module and render each resume section in its own TanStack route so content stays consistent across pages.
- Use global semantic color tokens and shared Page and Button components for the modular portfolio design so presentation stays consistent.
- Import portfolio imagery as bundled assets; illustrative imagery must not be presented as screenshots of actual client projects.

- Keep ephemeral matching-game state in a pure reducer with tests and derive playable labels from shared resume skills, so gameplay stays testable without changing resume content.
- Project browsing and filters only change presentation, never source resume fields, to preserve content integrity.
