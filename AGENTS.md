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

- Keep image subject selection and optimized variants in `src/lib/site-images.ts`, rendered through `ImageSlot`; this replaces images consistently without changing page content or layout.
- Keep public identity, contact links, office information and consultation method options in `src/lib/site.ts` and reuse them across pages so updates remain consistent; internal storage namespaces are independent of public naming.
