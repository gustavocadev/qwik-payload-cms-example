/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { component$ } from '@builder.io/qwik';
import escapeHTML from 'escape-html';
import { type BaseEditor, Text, type Node as SlateNode } from 'slate';

interface Props {
  richText: Exclude<SlateNode, BaseEditor>[];
}

export const RichText = component$<Props>((props) => {
  return (
    <>
      {props.richText?.map((node) =>
        Text.isText(node) ? (
          <>
            {node['bold'] && <strong>{node.text}</strong>}
            {node['code'] && <code>{node.text}</code>}
            {node['italic'] && <em>{node.text}</em>}
            {!node['bold'] && !node['code'] && !node['italic'] && (
              <>{node.text}</>
            )}
          </>
        ) : (
          <>
            {node.type === 'h1' && (
              <h1>{<RichText richText={node.children} />}</h1>
            )}
            {node.type === 'h2' && (
              <h2>{<RichText richText={node.children} />}</h2>
            )}
            {node.type === 'h3' && (
              <h3>{<RichText richText={node.children} />}</h3>
            )}
            {node.type === 'h4' && (
              <h4>{<RichText richText={node.children} />}</h4>
            )}
            {node.type === 'h5' && (
              <h5>{<RichText richText={node.children} />}</h5>
            )}
            {node.type === 'h6' && (
              <h6>{<RichText richText={node.children} />}</h6>
            )}
            {node.type === 'quote' && (
              <p>{<RichText richText={node.children} />}</p>
            )}
            {node.type === 'ul' && (
              <ul>{<RichText richText={node.children} />}</ul>
            )}
            {node.type === 'ol' && (
              <ol>{<RichText richText={node.children} />}</ol>
            )}
            {node.type === 'li' && (
              <li>{<RichText richText={node.children} />}</li>
            )}
            {node.type === 'link' && (
              <a href={escapeHTML(node.url)}>
                {<RichText richText={node.children} />}
              </a>
            )}
            {!node.type && <p>{<RichText richText={node.children} />}</p>}
          </>
        )
      )}
    </>
  );
});
