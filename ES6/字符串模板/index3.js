// 字符串拼接
// EM5
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友'+jspang+'。这节课我们学习字符串模版。';
document.write(blog);
// EM6
let jspangS='技术胖';
let blogS = `非常高兴你能看到这篇文章，我是你的老朋友${jspangS}。这节课我们学习字符串模版。`;
document.write(blogS);


// 运算
let a=1;
let b=2;
let result=`${a+b}`;
document.write(result);


// 字符串查找
// em5
let jspangs='技术胖';
let blogs = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blogs.indexOf(jspangs));
// em6
let jspang1='技术胖';
let blog1 = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog1.includes(jspang1));


// 判断开头是否存在
blog.startsWith(jspang);


// 判断结尾是否存在
blog.endsWith(jspang);


// 复制字符串
document.write('jspang|'.repeat(3));