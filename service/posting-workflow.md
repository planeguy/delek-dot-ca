#posting workflow
```
function post(newItem, homeFeed)
    home = load(homeFeed)
    current = load(home.next)
    if (current.items.count >= max) 
        current = new Channel({
                next = current.id
            })
        home.next = current.id
        save(home)
    newItem.id=newid()
    current.items.unshift(newItem)
    save(current)
```