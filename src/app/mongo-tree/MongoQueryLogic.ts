
// LINK: https://stackoverflow.com/questions/37469768/infix-to-binary-expression-tree nice pproach

//Link: https://medium.com/@alexanderv/parsing-mathematical-expressions-into-a-binary-tree-part-2-570e61dc8632

class Stack {
  stack = [];
  isEmpty () {
    return this.stack.length == 0;
  }

  pop () {
    return this.stack.pop();
  }

  peek () {
    return this.stack[ this.stack.length - 1 ];
  }

  push ( o ) {
    this.stack.push( o );
  }

  size () {
    return this.stack.length;
  }
}

class BinaryTreeNode {
  data = null;
  left = null;
  right = null;

  constructor ( data, left = null, right = null ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Operator {
  sign = null;
  value = null;

  constructor ( t ) {
    this.sign = t;
  }

  lessOrEqualInPrecedenceTo ( o: Operator ) {
    return this.value <= o.value;
  }
}

class Plus extends Operator {
  value = 0;
  constructor ( t ) {
    super( t );
  }

  applyFunction = ( arg1, arg2 ) => {
    return arg1 + arg2;
  }
}

class Minus extends Operator {
  value = 0;
  constructor ( t ) {
    super( t );
  }

  applyFunction = ( arg1, arg2 ) => {
    return arg1 - arg2;
  }
}

class Divide extends Operator {
  value = 0;
  constructor ( t ) {
    super( t );
  }
  applyFunction = ( arg1, arg2 ) => {
    return arg1 / arg2;
  }
}

class Multiply extends Operator {
  value = 0;
  constructor ( t ) {
    super( t );
  }
  applyFunction = ( arg1, arg2 ) => {
    return arg1 * arg2;
  }
}

class MongoQueryLogic {

  mongoOperators = {
    '&&': {
      v: '&&',
      precedence: 4,
      associativity: 'Left'
    },
    '||': {
      v: '||',
      precedence: 4,
      associativity: 'Left'
    },
    '!': {
      v: '!',
      precedence: 3,
      associativity: 'Left'
    },
    '==': {
      v: '==',
      precedence: 5,
      associativity: 'Left'
    },
    '__': { //exists
      v: '$exists',
      precedence: 5,
      associativity: 'Left'
    },
    '<': {
      v: '<',
      precedence: 5,
      associativity: 'Left'
    },
    '>': {
      v: '>',
      precedence: 5,
      associativity: 'Left'
    },
    '<=': {
      v: '<=',
      precedence: 5,
      associativity: 'Left'
    },
    '>=': {
      v: '>=',
      precedence: 5,
      associativity: 'Left'
    }
  };
  createOperator = ( t ) => {
    switch ( t ) {
      case '+': return new Plus( t );
      case '-': return new Minus( t );
      case '/': return new Divide( t );
      case '*': return new Multiply( t );
      default: return null;
    }
  }
  infixToBinaryTree = ( input ) => {
    if ( input.length === 0 ) { return null; }
    if ( input.length === 1 ) { return input[ 0 ]; }

    let head = null;
    let left = null;
    const outputStack = new Stack();
    const operatorStack = new Stack();

    const updateTree = () => {
      const operator = operatorStack.pop();
      const output = outputStack.pop();

      if ( head == null ) {
        head = new BinaryTreeNode( operator );
        left = outputStack.pop();
        head.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode( left );
        head.right = output instanceof BinaryTreeNode ? output : new BinaryTreeNode( output );
      } else {
        const subtree = head;
        head = new BinaryTreeNode( operator );
        head.left = output instanceof BinaryTreeNode ? output : new BinaryTreeNode( output );
        head.right = subtree;
      }
    };

    const createSubtree = ( operator, tree ) => {
      let left = null;
      if ( tree == null ) {
        const right = outputStack.pop();
        left = outputStack.pop();
        tree = new BinaryTreeNode( operator );
        tree.right = right instanceof BinaryTreeNode ? right : new BinaryTreeNode( right );
        tree.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode( left );
      } else {
        const subtree = tree;
        left = outputStack.pop();
        tree = new BinaryTreeNode( operator );
        tree.right = subtree;
        tree.left = left instanceof BinaryTreeNode ? left : new BinaryTreeNode( left );
      }

      const opToken = this.mongoOperators[ operator ];
      const opLiteralStack = operatorStack.peek();
      const opStack = opLiteralStack ? this.mongoOperators[ opLiteralStack ] : null;

      // if ( !operatorStack.isEmpty() && operator.lessOrEqualInPrecedenceTo( operatorStack.peek() ) ) {
      if (
          !operatorStack.isEmpty() &&
          opStack && opStack.precedence &&
          ( ( opToken.associativity === 'Left' && opToken.precedence <= opStack.precedence ) ||
            ( opToken.associativity === 'Right' && opToken.precedence < opStack.precedence ) ) ) {
        return createSubtree( operatorStack.pop(), tree );
      } else {
        return tree;
      }
    };

    const createMongoTree = ( infix ) => {
      // const operatorStack = new Stack();

      // const opstr = '==&&||!<=>=<>';
      infix = infix.replace( /\s+/g, '' );
      infix = infix.replace( /\"{1,}/g, '' );

      infix = infix.split( /(__|==|&&|\|\||!|<=|>=|<|>|\(|\))/gi ).filter( el => el !== '' );
      //infix.map(el =>el = el.replace(/\"{1,}/g, ''));

      for ( const token of infix ) {
        const opToken = this.mongoOperators[ token ];

        if ( token === '(' ) {
          operatorStack.push( token );
        } else if ( token === ')' ) {
          while ( operatorStack.peek() !== '(' ) {
            const subtree = createSubtree( operatorStack.pop(), null );
            outputStack.push( subtree );
          }
          operatorStack.pop();
        } else if ( opToken ) { // token length can be taken out
          // const operator = this.createOperator( token );
          const opLiteralStack = operatorStack.peek();
          const opStack = opLiteralStack ? this.mongoOperators[ opLiteralStack ] : null;

          if (
            opStack && opStack.precedence &&
            ( ( opToken.associativity === 'Left' && opToken.precedence <= opStack.precedence ) ||
              ( opToken.associativity === 'Right' && opToken.precedence < opStack.precedence ) ) ) {
            const subtree = createSubtree( operatorStack.pop(), null );
            outputStack.push( subtree );
          }
          operatorStack.push( token );
        } else {
          outputStack.push( token );
        }
      }

      while ( !operatorStack.isEmpty() ) {
        updateTree();
      }

      if ( head == null && outputStack.size() == 1 && outputStack.peek() instanceof BinaryTreeNode ) {
        head = outputStack.pop();
      }

      return head;

    }

    return createMongoTree( input );
  }

  stringToMongoValue(input) {
    if(input === "false") {
      return false;
    }
    if(input === "true") {
      return true;
    }

    if(!isNaN(input)){
      return parseFloat(input);
    }

    //todo date?

    return input;
  }

  mongoResult = {};
  binaryTreeToMongoQuery(tree) {
    if(!tree) {
      return this.mongoResult;
    }
    let a = null;
    let b = null;
    let temp = {};
    switch(tree.data) {
      case '==': {
        a = tree.left.data;
        b = tree.right.data;

        temp = {};
        temp[ a ] = this.stringToMongoValue(b);
        break;
      }

      case '__': {
        a = tree.left.data;
        b = tree.right.data;

        temp = {};
        temp[ a ] = {
          "$exists": this.stringToMongoValue(b)
        } 
        break;
      }

      case '<': {
        a = tree.left.data;
        b = tree.right.data;
        temp = {};
        temp[ a ] = { $lt: this.stringToMongoValue(b) };
        break;
      }
      case '<=': {
        a = tree.left.data;
        b = tree.right.data;
        temp = {};
        temp[ a ] = { $lte: this.stringToMongoValue(b) };
        break;
      }

      case '>': {
        a = tree.left.data;
        b = tree.right.data;
        temp = {};
        temp[ a ] = { $gt: this.stringToMongoValue(b) };
        break;
      }
      case '>=': {
        a = tree.left.data;
        b = tree.right.data;
        temp = {};
        temp[ a ] = { $gte: this.stringToMongoValue(b) };
        break;
      }

      case '||': {
        a = this.binaryTreeToMongoQuery(tree.left);
        b = this.binaryTreeToMongoQuery(tree.right);
        temp = {$or: [
          a,b
        ]};
        break;
      }
      case '&&': {
        a = this.binaryTreeToMongoQuery(tree.left);
        b = this.binaryTreeToMongoQuery(tree.right);
        temp = {$and: [
          a,b
        ]};
        break;
      }
    }

    return temp;

  }

  createMongoQuery(input: string) {
    const tree = this.infixToBinaryTree(input);

    const mongoQuery = this.binaryTreeToMongoQuery(tree);

    return mongoQuery;
  }

 
}

export default new MongoQueryLogic();
