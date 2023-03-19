![Publius Logo](Publius-Transparent-White.png)

# 📚 Publication Management on the Blockchain

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Welcome to **Publius**, a revolutionary solution for publication management on the blockchain! Publius enables authors to seamlessly create, manage, and distribute their publications in a decentralized manner.

## 📖 About Publius

Publius is a smart contract that leverages the Ethereum blockchain to represent a publication with sections, chapters, and pages. Built using the ERC721 standard, it ensures unique ownership and transferability of the publication tokens.

### Features:

- Mint publication tokens
- Create and manage publications with sections, chapters, and pages
- Easily add and remove content
- Compatible with ERC721 standard for easy token management and trading

## 📚 Usage

### Initialize the contract

Initialize the contract with the author's address, publication name, and cover image.

```javascript
function initialize(address _publicationAuthor, string calldata _publicationName, string calldata _publicationCoverImage) public initializer
```

### Mint New Tokens
Mint new tokens with the specified amount
```javascript
function mint(uint256 _amount) public payable
```

### Add a section, chapters, and pages to the publication
Add a new section along with its chapters and pages to the publication.

```javascript
function addSection(bytes calldata _sectionInfo, bytes calldata _chapterInfo, bytes calldata _pageInfo) public onlyOwner
```

### Add a new chapter to the publication
Add a new chapter to the publication with pages.

```javascript
function addChapter(uint256 _sectionId, string memory _chapterName, string memory _chapterImage, uint256 _chapterId, string[] memory _pageNames, string[] memory _pageContent, string[] memory _pageIds) public onlyOwner
```

### Add a new page to the publication
Add a new page to the specified chapter.

```javascript
function addPage(uint256 _chapter, string memory _pageName, string memory _pageContent, string memory _pageId) public onlyOwner
```

### Get a page from the specified chapter
Retrieve a page with the given id in the specified chapter.

```javascript
function getPage(uint256 _chapter, uint256 _pageId) public view returns (Page memory)
```
### Get the token URI
Retrieve the complete token URI.

```javascript
function tokenURI() public view returns (string memory uri)
```

### 📝 License
This project is licensed under the MIT License.
