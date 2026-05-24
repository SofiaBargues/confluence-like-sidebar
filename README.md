## Confluence-like Sidebar with Tree Structure

Build a React component that renders a collapsible sidebar with a tree-like navigation UI.

### Objective

The goal is to create a sidebar menu where each node can be expanded or collapsed, similar to a Confluence knowledge base sidebar.

### Requirements

- The data is provided by the backend through an API.
- The menu should be collapsible.
- Each node should be a link.
- A node at any level can either have children or be a leaf/terminal node.
- A node with children should show:
  - A right caret icon when closed.
  - A down caret icon when open.
- Each level should be properly indented.
- Each node’s text label should be underlined on hover.

### Mockups

#### Expanded Tree

```txt
⌄ Knowledge Base Articles
  ⌄ Academic Technologies
    • Lightboard
    • OWL 360 Camera Tutorial
    • ScreenPal
  ⌄ Apple
    ⌄ iOS Articles
      • VPN with iOS
      • Upgrade iOS
    ⌄ Mac Articles
      • Fix macOS
      • Upgrade macOS
    • Request License
    • Purchase Apps
```

#### Partially Collapsed Tree

```txt
⌄ Knowledge Base Articles
  ⌄ Academic Technologies
    • Lightboard
    • OWL 360 Camera Tutorial
    • ScreenPal
  ⌄ Apple
    › iOS Articles
    › Mac Articles
    • Request License
    • Purchase Apps
```

#### Collapsed Tree

```txt
⌄ Knowledge Base Articles
  › Academic Technologies
  › Apple
```

