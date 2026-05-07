// 课程数据
const coursesData = [
    {
        id: 1,
        title: "基于Gradio的AI应用搭建实践课从入门到精通",
        difficulty: "入门难度",
        duration: "3小时",
        instructor: "肖涵",
        students: 3209,
        image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        badge: "基于Gradio的<br>AI应用搭建实践课",
        isImage: false,
        task: "nlp",
        level: "entry",
        durationValue: 180,
        price: 0
    },
    {
        id: 2,
        title: "Qwen2.5-VL Cookbook来啦！手把手教你怎么用好视觉理解模型！",
        difficulty: "中级难度",
        duration: "3小时",
        instructor: "子涵",
        students: 3209,
        image: "https://via.placeholder.com/280x160/FF6B6B/FFFFFF?text=Qwen2.5",
        isImage: true,
        task: "cv",
        level: "intermediate",
        durationValue: 180,
        price: 199
    },
    {
        id: 3,
        title: "OpenCSG开源SmolTalk Chinese数据集",
        difficulty: "初级难度",
        duration: "3小时",
        instructor: "孙晓晨",
        students: 3209,
        image: "https://via.placeholder.com/280x160/FFD93D/333333?text=SmolTalk",
        isImage: true,
        task: "nlp",
        level: "entry",
        durationValue: 180,
        price: 0
    },
    {
        id: 4,
        title: "科技创造未来 区块链技术创新高端峰会论坛",
        difficulty: "中级难度",
        duration: "2小时",
        instructor: "王教授",
        students: 1500,
        image: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        badge: "科技创造未来<br>区块链技术创新高端峰会论坛",
        isImage: false,
        isDarkBadge: true,
        task: "multimodal",
        level: "intermediate",
        durationValue: 120,
        price: 199
    },
    {
        id: 5,
        title: "Qwen2.5-VL 视觉语言模型实战教程",
        difficulty: "高级难度",
        duration: "5小时",
        instructor: "李明",
        students: 2800,
        image: "https://via.placeholder.com/280x160/FF6B6B/FFFFFF?text=Qwen2.5",
        isImage: true,
        task: "cv",
        level: "advanced",
        durationValue: 300,
        price: 299
    },
    {
        id: 6,
        title: "SmolTalk Chinese 数据集构建与应用",
        difficulty: "初级难度",
        duration: "1.5小时",
        instructor: "张华",
        students: 950,
        image: "https://via.placeholder.com/280x160/FFD93D/333333?text=SmolTalk",
        isImage: true,
        task: "nlp",
        level: "entry",
        durationValue: 90,
        price: 0
    },
    {
        id: 7,
        title: "深度学习基础：神经网络入门到实践",
        difficulty: "入门级",
        duration: "4小时",
        instructor: "元河",
        students: 4200,
        image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        badge: "深度学习基础<br>神经网络入门",
        isImage: false,
        task: "cv",
        level: "entry",
        durationValue: 240,
        price: 0
    },
    {
        id: 8,
        title: "自然语言处理进阶：Transformer架构详解",
        difficulty: "进阶级",
        duration: "6小时",
        instructor: "历波",
        students: 1800,
        image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        badge: "NLP进阶<br>Transformer架构",
        isImage: false,
        task: "nlp",
        level: "intermediate",
        durationValue: 360,
        price: 149
    },
    {
        id: 9,
        title: "多模态学习：视觉与语言的融合",
        difficulty: "大师级",
        duration: "8小时",
        instructor: "陶馨璧",
        students: 1200,
        image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        badge: "多模态学习<br>视觉与语言融合",
        isImage: false,
        task: "multimodal",
        level: "advanced",
        durationValue: 480,
        price: 399
    },
    {
        id: 10,
        title: "Python数据分析实战指南",
        difficulty: "入门难度",
        duration: "4小时",
        instructor: "刘教授",
        students: 5800,
        image: "linear-gradient(135deg, #27AE60 0%, #2ecc71 100%)",
        badge: "Python<br>数据分析",
        isImage: false,
        task: "nlp",
        level: "entry",
        durationValue: 240,
        price: 0,
        type: "text"
    },
    {
        id: 11,
        title: "深度学习入门实战：理论与实践结合",
        difficulty: "中级难度",
        duration: "6小时",
        instructor: "陈博士",
        students: 8900,
        image: "linear-gradient(135deg, #F39C12 0%, #f1c40f 100%)",
        badge: "深度学习<br>理论实践",
        isImage: false,
        task: "cv",
        level: "intermediate",
        durationValue: 360,
        price: 149,
        type: "mixed"
    },
    {
        id: 12,
        title: "Web前端开发实战：从入门到精通",
        difficulty: "中级难度",
        duration: "10小时",
        instructor: "周老师",
        students: 21000,
        image: "linear-gradient(135deg, #3498DB 0%, #2980b9 100%)",
        badge: "Web前端<br>开发实战",
        isImage: false,
        task: "multimodal",
        level: "intermediate",
        durationValue: 600,
        price: 199,
        type: "mixed"
    }
];

// DOM 元素
const allCoursesContainer = document.getElementById('allCourses');
const courseSearchInput = document.getElementById('courseSearch');
const sortSelect = document.getElementById('sortSelect');
const expandInstructorsBtn = document.getElementById('expandInstructors');

// 筛选状态
let activeFilters = {
    task: [],
    level: [],
    duration: [],
    instructor: [],
    price: []
};

// 初始化
function init() {
    renderAllCourses();
    bindEvents();
}

// 渲染全部课程
function renderAllCourses(courses = coursesData) {
    const filteredCourses = filterCourses(courses);
    const sortedCourses = sortCourses(filteredCourses);
    
    // 更新课程数量
    document.querySelector('.course-count').textContent = `(${sortedCourses.length})`;
    
    if (sortedCourses.length === 0) {
        allCoursesContainer.innerHTML = '<div class="no-results">没有找到匹配的课程</div>';
        return;
    }
    
    allCoursesContainer.innerHTML = sortedCourses.map(course => createCourseCard(course)).join('');
}

// 创建课程卡片HTML
function createCourseCard(course) {
    const imageHtml = course.isImage
        ? `<img src="${course.image}" alt="${course.title}">`
        : `<div class="course-badge ${course.isDarkBadge ? 'dark' : ''}">${course.badge}</div>`;

    // 根据课程标题生成唯一的key
    const courseKey = course.title.toLowerCase().replace(/[\s\-\:\(\)]+/g, '');

    // 价格标签
    const priceLabel = course.price === 0
        ? '<span class="price-tag free">免费</span>'
        : `<span class="price-tag paid">¥${course.price}</span>`;

    return `
        <div class="course-card" data-id="${course.id}" onclick="openCourseDetail('${courseKey}')">
            <div class="course-image" style="background: ${course.isImage ? '#f0f0f0' : course.image}">
                ${imageHtml}
                <div class="play-icon">▶</div>
                <div class="course-price-tag">${priceLabel}</div>
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <div class="course-meta">
                    <span class="difficulty">${course.difficulty}</span>
                    <span class="duration">⏱ ${course.duration}</span>
                </div>
                <div class="course-footer">
                    <span class="instructor">${course.instructor}</span>
                    <span class="students">${course.students}人已学过</span>
                </div>
            </div>
        </div>
    `;
}

// 筛选课程
function filterCourses(courses) {
    return courses.filter(course => {
        // 价格筛选
        if (activeFilters.price.length > 0) {
            const priceMatch = activeFilters.price.some(p => {
                if (p === 'free') return course.price === 0;
                if (p === 'paid') return course.price > 0;
                return false;
            });
            if (!priceMatch) return false;
        }

        // 任务筛选
        if (activeFilters.task.length > 0 && !activeFilters.task.includes(course.task)) {
            return false;
        }

        // 难度筛选
        if (activeFilters.level.length > 0 && !activeFilters.level.includes(course.level)) {
            return false;
        }

        // 时长筛选
        if (activeFilters.duration.length > 0) {
            const durationMatch = activeFilters.duration.some(range => {
                switch(range) {
                    case 'short': return course.durationValue < 10;
                    case 'medium': return course.durationValue >= 10 && course.durationValue < 30;
                    case 'long': return course.durationValue >= 30 && course.durationValue < 60;
                    case 'extra-long': return course.durationValue >= 60;
                    default: return false;
                }
            });
            if (!durationMatch) return false;
        }

        // 讲师筛选
        if (activeFilters.instructor.length > 0) {
            // 这里简化处理，实际应该根据讲师姓名匹配
            return true;
        }

        return true;
    });
}

// 排序课程
function sortCourses(courses) {
    const sortType = sortSelect.value;
    
    switch(sortType) {
        case 'newest':
            return [...courses].sort((a, b) => b.id - a.id);
        case 'popular':
            return [...courses].sort((a, b) => b.students - a.students);
        case 'duration':
            return [...courses].sort((a, b) => a.durationValue - b.durationValue);
        default:
            return courses;
    }
}

// 搜索课程
function searchCourses(query) {
    if (!query.trim()) {
        renderAllCourses();
        return;
    }
    
    const filtered = coursesData.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
    );
    
    renderAllCourses(filtered);
}

// 绑定事件
function bindEvents() {
    // 搜索框事件
    let searchTimeout;
    courseSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchCourses(e.target.value);
        }, 300);
    });
    
    // 排序选择事件
    sortSelect.addEventListener('change', () => {
        renderAllCourses();
    });
    
    // 筛选框事件
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const name = e.target.name;
            const value = e.target.value;
            
            if (e.target.checked) {
                activeFilters[name].push(value);
            } else {
                activeFilters[name] = activeFilters[name].filter(v => v !== value);
            }
            
            renderAllCourses();
        });
    });
    
    // 展开/收起讲师列表
    let instructorsExpanded = false;
    expandInstructorsBtn.addEventListener('click', () => {
        const instructorOptions = document.querySelector('.instructor-options');
        instructorsExpanded = !instructorsExpanded;
        
        if (instructorsExpanded) {
            instructorOptions.style.maxHeight = 'none';
            expandInstructorsBtn.textContent = '收起';
        } else {
            instructorOptions.style.maxHeight = '200px';
            expandInstructorsBtn.textContent = '//讲师超过10个后显示展开';
        }
    });
    
    // 课程卡片点击事件
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.course-card');
        if (card) {
            const titleElement = card.querySelector('h3');
            if (titleElement) {
                const courseKey = titleElement.textContent.toLowerCase().replace(/[\s\-\:\(\)]+/g, '');
                console.log('点击了课程:', courseKey);
                window.location.href = 'course-detail.html?course=' + encodeURIComponent(courseKey);
            }
        }
    });
    
    // 筛选栏展开/收起
    document.querySelectorAll('.filter-section h3').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            const section = header.parentElement;
            section.classList.toggle('collapsed');
        });
    });
}

// 课程详情数据
const courseDetails = {
    '科技创造未来区块链技术创新高端峰会论坛': {
        title: '科技创造未来 区块链技术创新高端峰会论坛',
        difficulty: '中级难度',
        duration: '2小时',
        rating: 4.9,
        students: 1500,
        lessons: 12,
        chapters: 3,
        description: '深入探讨区块链技术的最新发展趋势和应用案例，了解区块链在金融、供应链、数字资产等领域的创新应用。',
        fullDescription: '本课程邀请了多位区块链领域的专家学者，共同探讨区块链技术的前沿发展。课程内容涵盖区块链基础原理、智能合约开发、去中心化应用(DApp)构建等核心知识。通过实际案例分析和现场演示，帮助学员全面了解区块链技术的应用场景和商业价值。',
        objectives: ['理解区块链技术的核心原理', '掌握智能合约开发基础', '了解区块链在各行业的应用案例', '掌握DApp开发流程'],
        audience: ['对区块链技术感兴趣的开发者', '金融行业从业者', '希望了解新技术趋势的创业者', '计算机相关专业学生'],
        cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop',
        chapters: [
            {
                title: '区块链技术概述',
                duration: '30分钟',
                lessons: [
                    { title: '区块链基础概念', duration: '10分钟', type: 'video' },
                    { title: '区块链发展历程', duration: '12分钟', type: 'video' },
                    { title: '核心技术原理', duration: '8分钟', type: 'text' }
                ]
            },
            {
                title: '智能合约开发',
                duration: '45分钟',
                lessons: [
                    { title: 'Solidity语言基础', duration: '15分钟', type: 'video' },
                    { title: '智能合约设计模式', duration: '20分钟', type: 'video' },
                    { title: '实战案例演示', duration: '10分钟', type: 'video' }
                ]
            },
            {
                title: 'DApp应用实践',
                duration: '45分钟',
                lessons: [
                    { title: 'DApp架构设计', duration: '12分钟', type: 'video' },
                    { title: '前端交互开发', duration: '18分钟', type: 'video' },
                    { title: '部署与测试', duration: '15分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '张同学', date: '2024-01-15', text: '课程内容非常详实，讲师讲解清晰，收获很大！' },
            { author: '李工程师', date: '2024-01-12', text: '案例分析很实用，对实际工作帮助很大。' },
            { author: '王经理', date: '2024-01-10', text: '作为入门课程非常合适，推荐给大家。' }
        ]
    },
    'qwen25vl视觉语言模型实战教程': {
        title: 'Qwen2.5-VL 视觉语言模型实战教程',
        difficulty: '高级难度',
        duration: '5小时',
        rating: 4.8,
        students: 2800,
        lessons: 20,
        chapters: 4,
        description: '系统学习Qwen2.5-VL视觉语言模型的原理与实践，掌握多模态AI应用开发技能。',
        fullDescription: '本课程深入讲解Qwen2.5-VL视觉语言模型的技术原理和应用开发。课程从视觉语言模型的基础概念入手，逐步深入到模型架构、训练方法和应用实践。通过大量实战案例，帮助学员掌握如何构建基于Qwen2.5-VL的智能应用。',
        objectives: ['理解视觉语言模型的核心原理', '掌握Qwen2.5-VL模型架构', '学会使用API进行推理', '能够独立开发多模态应用'],
        audience: ['AI算法工程师', '计算机视觉开发者', '自然语言处理从业者', '对多模态AI感兴趣的研究者'],
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad903?w=800&h=450&fit=crop',
        chapters: [
            {
                title: '视觉语言模型基础',
                duration: '60分钟',
                lessons: [
                    { title: '多模态学习概述', duration: '15分钟', type: 'video' },
                    { title: '视觉Transformer原理', duration: '20分钟', type: 'video' },
                    { title: '图文预训练方法', duration: '25分钟', type: 'video' }
                ]
            },
            {
                title: 'Qwen2.5-VL架构解析',
                duration: '90分钟',
                lessons: [
                    { title: '模型结构详解', duration: '25分钟', type: 'video' },
                    { title: '视觉编码器设计', duration: '30分钟', type: 'video' },
                    { title: '跨模态融合机制', duration: '35分钟', type: 'video' }
                ]
            },
            {
                title: '实战开发指南',
                duration: '90分钟',
                lessons: [
                    { title: '环境搭建与配置', duration: '20分钟', type: 'video' },
                    { title: 'API调用实战', duration: '35分钟', type: 'video' },
                    { title: '自定义微调方法', duration: '35分钟', type: 'video' }
                ]
            },
            {
                title: '应用案例实践',
                duration: '60分钟',
                lessons: [
                    { title: '图像问答系统', duration: '20分钟', type: 'video' },
                    { title: '视觉推理任务', duration: '20分钟', type: 'video' },
                    { title: '多模态生成应用', duration: '20分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '陈研究员', date: '2024-01-18', text: '课程内容非常深入，适合有一定基础的学习者。' },
            { author: '刘工程师', date: '2024-01-14', text: '实战案例很有价值，学到了很多实用技巧。' }
        ]
    },
    'smoltalkchinese数据集构建与应用': {
        title: 'SmolTalk Chinese 数据集构建与应用',
        difficulty: '初级难度',
        duration: '1.5小时',
        rating: 4.7,
        students: 950,
        lessons: 8,
        chapters: 2,
        description: '学习SmolTalk Chinese数据集的构建方法和应用场景，掌握数据集处理核心技能。',
        fullDescription: '本课程介绍SmolTalk Chinese中文对话数据集的构建过程和应用方法。课程涵盖数据收集、清洗、标注等全流程，帮助学员掌握数据集构建的核心技能，并了解如何将数据集应用于实际的NLP任务中。',
        objectives: ['了解数据集构建流程', '掌握数据清洗方法', '学会数据标注技术', '了解数据集应用场景'],
        audience: ['NLP初学者', '数据工程师', 'AI产品经理', '计算机相关专业学生'],
        cover: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop',
        chapters: [
            {
                title: '数据集概述',
                duration: '30分钟',
                lessons: [
                    { title: '数据集介绍', duration: '10分钟', type: 'video' },
                    { title: '数据来源分析', duration: '10分钟', type: 'video' },
                    { title: '数据统计特征', duration: '10分钟', type: 'text' }
                ]
            },
            {
                title: '构建与应用',
                duration: '60分钟',
                lessons: [
                    { title: '数据收集方法', duration: '15分钟', type: 'video' },
                    { title: '数据清洗技术', duration: '20分钟', type: 'video' },
                    { title: '标注规范与工具', duration: '15分钟', type: 'video' },
                    { title: '应用场景演示', duration: '10分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '赵同学', date: '2024-01-20', text: '入门课程，讲解清晰，适合初学者。' }
        ]
    },
    '深度学习基础神经网络入门到实践': {
        title: '深度学习基础：神经网络入门到实践',
        difficulty: '入门级',
        duration: '4小时',
        rating: 4.9,
        students: 4200,
        lessons: 16,
        chapters: 4,
        description: '从零开始学习深度学习，掌握神经网络的核心概念和实践技能。',
        fullDescription: '本课程是深度学习的入门课程，从神经网络的基础概念开始，逐步深入到卷积神经网络、循环神经网络等高级模型。通过理论讲解和实战练习相结合的方式，帮助学员建立扎实的深度学习基础。',
        objectives: ['理解神经网络基本原理', '掌握反向传播算法', '学会使用主流深度学习框架', '能够独立完成简单的深度学习项目'],
        audience: ['编程初学者', '计算机专业学生', '对AI感兴趣的开发者', '希望转型AI领域的从业者'],
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad903?w=800&h=450&fit=crop',
        chapters: [
            {
                title: '神经网络基础',
                duration: '60分钟',
                lessons: [
                    { title: '感知机原理', duration: '15分钟', type: 'video' },
                    { title: '多层神经网络', duration: '20分钟', type: 'video' },
                    { title: '激活函数详解', duration: '25分钟', type: 'video' }
                ]
            },
            {
                title: '训练与优化',
                duration: '60分钟',
                lessons: [
                    { title: '损失函数介绍', duration: '15分钟', type: 'video' },
                    { title: '反向传播算法', duration: '25分钟', type: 'video' },
                    { title: '优化器选择', duration: '20分钟', type: 'video' }
                ]
            },
            {
                title: '卷积神经网络',
                duration: '60分钟',
                lessons: [
                    { title: '卷积运算原理', duration: '20分钟', type: 'video' },
                    { title: 'CNN架构设计', duration: '25分钟', type: 'video' },
                    { title: '经典模型解析', duration: '15分钟', type: 'video' }
                ]
            },
            {
                title: '实战项目',
                duration: '60分钟',
                lessons: [
                    { title: '环境搭建', duration: '10分钟', type: 'video' },
                    { title: '数据预处理', duration: '15分钟', type: 'video' },
                    { title: '模型训练', duration: '20分钟', type: 'video' },
                    { title: '模型评估', duration: '15分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '孙同学', date: '2024-01-19', text: '非常好的入门课程，讲解通俗易懂！' },
            { author: '周工程师', date: '2024-01-17', text: '实战项目很有帮助，推荐！' },
            { author: '吴老师', date: '2024-01-15', text: '适合零基础学员，内容安排合理。' }
        ]
    },
    '自然语言处理进阶transformer架构详解': {
        title: '自然语言处理进阶：Transformer架构详解',
        difficulty: '进阶级',
        duration: '6小时',
        rating: 4.8,
        students: 1800,
        lessons: 24,
        chapters: 5,
        description: '深入学习Transformer架构，掌握现代NLP核心技术。',
        fullDescription: '本课程深入讲解Transformer架构的原理和应用，包括自注意力机制、多头注意力、位置编码等核心概念。通过理论讲解和代码实践，帮助学员掌握现代NLP的核心技术。',
        objectives: ['理解Transformer架构原理', '掌握自注意力机制', '学会使用预训练模型', '能够完成NLP实战项目'],
        audience: ['有一定编程基础的开发者', 'NLP从业者', 'AI研究人员', '计算机相关专业研究生'],
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad903?w=800&h=450&fit=crop',
        chapters: [
            {
                title: 'Transformer基础',
                duration: '72分钟',
                lessons: [
                    { title: 'Seq2Seq模型回顾', duration: '15分钟', type: 'video' },
                    { title: '自注意力机制', duration: '25分钟', type: 'video' },
                    { title: '多头注意力', duration: '20分钟', type: 'video' },
                    { title: '位置编码', duration: '12分钟', type: 'video' }
                ]
            },
            {
                title: 'Transformer架构',
                duration: '72分钟',
                lessons: [
                    { title: '编码器结构', duration: '20分钟', type: 'video' },
                    { title: '解码器结构', duration: '20分钟', type: 'video' },
                    { title: '残差连接与归一化', duration: '16分钟', type: 'video' },
                    { title: '整体架构解析', duration: '16分钟', type: 'video' }
                ]
            },
            {
                title: '预训练模型',
                duration: '72分钟',
                lessons: [
                    { title: 'BERT模型详解', duration: '25分钟', type: 'video' },
                    { title: 'GPT模型详解', duration: '25分钟', type: 'video' },
                    { title: '预训练任务设计', duration: '22分钟', type: 'video' }
                ]
            },
            {
                title: '实践应用',
                duration: '72分钟',
                lessons: [
                    { title: 'Hugging Face使用', duration: '20分钟', type: 'video' },
                    { title: '文本分类实战', duration: '25分钟', type: 'video' },
                    { title: '命名实体识别', duration: '27分钟', type: 'video' }
                ]
            },
            {
                title: '进阶专题',
                duration: '36分钟',
                lessons: [
                    { title: '模型压缩与加速', duration: '18分钟', type: 'video' },
                    { title: '知识蒸馏技术', duration: '18分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '郑研究员', date: '2024-01-16', text: '非常深入的课程，适合有一定基础的学习者。' },
            { author: '黄工程师', date: '2024-01-13', text: 'Transformer讲解非常清晰，推荐！' }
        ]
    },
    '多模态学习视觉与语言的融合': {
        title: '多模态学习：视觉与语言的融合',
        difficulty: '大师级',
        duration: '8小时',
        rating: 4.9,
        students: 1200,
        lessons: 32,
        chapters: 6,
        description: '探索多模态学习前沿技术，掌握视觉与语言融合的核心方法。',
        fullDescription: '本课程深入探讨多模态学习的前沿技术，包括视觉-语言预训练、跨模态注意力机制、多模态生成等核心内容。通过理论讲解和前沿论文解读，帮助学员了解多模态学习的最新进展。',
        objectives: ['理解多模态学习原理', '掌握视觉-语言预训练方法', '了解跨模态注意力机制', '跟踪多模态学习前沿'],
        audience: ['AI研究人员', '高级算法工程师', '计算机视觉专家', 'NLP专家'],
        cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad903?w=800&h=450&fit=crop',
        chapters: [
            {
                title: '多模态学习概述',
                duration: '40分钟',
                lessons: [
                    { title: '多模态学习定义', duration: '10分钟', type: 'video' },
                    { title: '应用场景介绍', duration: '15分钟', type: 'video' },
                    { title: '挑战与机遇', duration: '15分钟', type: 'video' }
                ]
            },
            {
                title: '视觉-语言预训练',
                duration: '100分钟',
                lessons: [
                    { title: 'CLIP模型详解', duration: '30分钟', type: 'video' },
                    { title: 'ALIGN模型', duration: '25分钟', type: 'video' },
                    { title: 'Flamingo模型', duration: '25分钟', type: 'video' },
                    { title: '预训练任务设计', duration: '20分钟', type: 'video' }
                ]
            },
            {
                title: '跨模态注意力',
                duration: '80分钟',
                lessons: [
                    { title: '视觉注意力机制', duration: '25分钟', type: 'video' },
                    { title: '图文交叉注意力', duration: '30分钟', type: 'video' },
                    { title: '动态注意力机制', duration: '25分钟', type: 'video' }
                ]
            },
            {
                title: '多模态生成',
                duration: '80分钟',
                lessons: [
                    { title: '图文生成模型', duration: '25分钟', type: 'video' },
                    { title: '视频生成技术', duration: '30分钟', type: 'video' },
                    { title: '可控生成方法', duration: '25分钟', type: 'video' }
                ]
            },
            {
                title: '多模态理解',
                duration: '60分钟',
                lessons: [
                    { title: '视觉问答任务', duration: '25分钟', type: 'video' },
                    { title: '视觉推理任务', duration: '20分钟', type: 'video' },
                    { title: '多模态检索', duration: '15分钟', type: 'video' }
                ]
            },
            {
                title: '前沿专题',
                duration: '60分钟',
                lessons: [
                    { title: '多模态大模型', duration: '30分钟', type: 'video' },
                    { title: '最新论文解读', duration: '30分钟', type: 'video' }
                ]
            }
        ],
        comments: [
            { author: '冯教授', date: '2024-01-12', text: '非常前沿的内容，适合研究人员学习。' },
            { author: '何研究员', date: '2024-01-10', text: '课程内容很深入，收获很大！' }
        ]
    }
};

// 打开课程详情模态框
function openCourseDetail(courseKey) {
    const course = courseDetails[courseKey];
    if (!course) return;

    // 更新课程信息
    document.getElementById('detailTitle').textContent = course.title;
    document.getElementById('detailDifficulty').textContent = course.difficulty;
    document.getElementById('detailDuration').textContent = '⏱ ' + course.duration;
    document.getElementById('detailStudents').textContent = course.students.toLocaleString();
    document.getElementById('detailLessons').textContent = course.lessons;
    document.getElementById('detailChapters').textContent = course.chapters.length;
    document.getElementById('detailDesc').textContent = course.description;
    document.getElementById('detailCover').src = course.cover;
    document.getElementById('detailFullDesc').textContent = course.fullDescription;

    // 更新学习目标
    const objectivesList = document.getElementById('detailObjectives');
    objectivesList.innerHTML = course.objectives.map(obj => `<li>${obj}</li>`).join('');

    // 更新适合人群
    const audienceList = document.getElementById('detailAudience');
    audienceList.innerHTML = course.audience.map(aud => `<li>${aud}</li>`).join('');

    // 更新章节列表
    renderChapterList(course.chapters);

    // 更新评论列表
    renderCommentList(course.comments);

    // 显示模态框
    document.getElementById('courseDetailModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 关闭课程详情模态框
function closeCourseDetail() {
    document.getElementById('courseDetailModal').classList.remove('show');
    document.body.style.overflow = '';
}

// 渲染章节列表
function renderChapterList(chapters) {
    const chapterList = document.getElementById('chapterList');
    chapterList.innerHTML = chapters.map((chapter, index) => `
        <div class="chapter-item">
            <div class="chapter-header" onclick="toggleChapter(this)">
                <span class="chapter-number">${index + 1}</span>
                <span class="chapter-title">${chapter.title}</span>
                <span class="chapter-duration">${chapter.duration}</span>
                <span class="chapter-expand">▼</span>
            </div>
            <div class="lesson-list">
                ${chapter.lessons.map(lesson => `
                    <div class="lesson-item">
                        <span class="lesson-icon ${lesson.type}">${lesson.type === 'video' ? '▶' : '¶'}</span>
                        <span class="lesson-title">${lesson.title}</span>
                        <span class="lesson-duration">${lesson.duration}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 展开/收起章节
function toggleChapter(header) {
    const expandIcon = header.querySelector('.chapter-expand');
    const lessonList = header.parentElement.querySelector('.lesson-list');
    
    expandIcon.classList.toggle('expanded');
    
    if (expandIcon.classList.contains('expanded')) {
        lessonList.style.display = 'block';
    } else {
        lessonList.style.display = 'none';
    }
}

// 渲染评论列表
function renderCommentList(comments) {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <div class="comment-avatar">${comment.author.charAt(0)}</div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
            </div>
        </div>
    `).join('');
}

// 显示详情标签页
function showDetailTab(tabName) {
    // 切换标签按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1)).classList.add('active');

    // 切换内容显示
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.getElementById('content' + tabName.charAt(0).toUpperCase() + tabName.slice(1)).classList.add('active');
}

// 播放课程
function playCourse() {
    showUploadToast('🎬 正在播放课程...');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);
