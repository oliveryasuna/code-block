# &lt;code-block&gt;

A web component using [Prism](https://github.com/PrismJS/prism/).

## Getting Started

Without any attributes, the language will default to `clike` and theme to `prism`.

```html
<code-block></code-block>

<script>
    document.querySelector('code-block').code = `function print(msg) {
  console.log(msg);
}

print('Hello, World!');`;
</script>
```

You can specify the language and theme with the `language` and `theme` attributes, respectively.

```html
<code-block language="java" theme="prism-tomorrow"></code-block>
```

If you want to remove the theme's background graphics, use the `plain` attribute.

```html
<code-block plain></code-block>
```

## License

This code is under the [BSD 3-Clause](LICENSE.txt).

## Sponsoring

If you like my work and want to support it, please consider [sponsoring](https://github.com/sponsors/oliveryasuna) me. It's how I make the time to code great
things!