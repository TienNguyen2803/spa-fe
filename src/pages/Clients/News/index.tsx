
import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia,
  CardActions,
  Button,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  Pagination,
  useMediaQuery,
  useTheme,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Search, 
  AccessTime, 
  LocalOffer, 
  Bookmark,
  BookmarkBorder,
  Share,
  Visibility,
  TrendingUp,
  NewReleases,
  EventNote,
  Science,
  Spa
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

const NewsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const newsCategories = [
    { id: 'all', label: 'Tất cả', icon: <Spa /> },
    { id: 'technology', label: 'Công nghệ', icon: <Science /> },
    { id: 'trends', label: 'Xu hướng', icon: <TrendingUp /> },
    { id: 'events', label: 'Sự kiện', icon: <EventNote /> },
    { id: 'promotions', label: 'Khuyến mãi', icon: <NewReleases /> }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Tấm Ơi Spa giới thiệu công nghệ trẻ hóa da mới',
      summary: 'Công nghệ Hydra Facial Pro+ với tinh chất đặc biệt giúp làm sạch sâu và trẻ hóa da.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
      date: '20/03/2024',
      author: 'Ngọc Anh',
      category: 'technology',
      tags: ['công nghệ', 'trẻ hóa da'],
      viewCount: 1245
    },
    {
      id: 2,
      title: 'Xu hướng chăm sóc da "Skin Minimalism" 2024',
      summary: 'Phong cách tối giản trong chăm sóc da đang được ưa chuộng.',
      image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5',
      date: '18/03/2024', 
      author: 'Minh Tú',
      category: 'trends',
      tags: ['xu hướng', 'chăm sóc da'],
      viewCount: 982
    },
    {
      id: 3,
      title: 'Sự kiện ra mắt dòng sản phẩm thảo dược',
      summary: 'Tấm Ơi Spa chính thức ra mắt dòng sản phẩm thảo dược độc quyền.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
      date: '15/03/2024',
      author: 'Thu Hà',
      category: 'events',
      tags: ['sự kiện', 'thảo dược'],
      viewCount: 756
    }
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const toggleSaveArticle = (id) => {
    setSavedArticles(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getFilteredArticles = () => {
    const categoryId = newsCategories[activeTab].id;
    let filtered = newsArticles;
    
    if (categoryId !== 'all') {
      filtered = filtered.filter(article => article.category === categoryId);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.summary.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  };

  const articlesPerPage = 6;
  const filteredArticles = getFilteredArticles();
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage, 
    currentPage * articlesPerPage
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 6, textAlign: 'center' }}
      >
        <Typography variant="h2" sx={{ color: '#8D6E63', fontWeight: 'bold', mb: 2 }}>
          Tin Tức & Cập Nhật
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Khám phá những tin tức mới nhất về làm đẹp và chăm sóc sức khỏe
        </Typography>
      </MotionBox>

      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Tìm kiếm tin tức..."
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
          sx={{ 
            mb: 4,
            '& .MuiTab-root': { 
              minWidth: 'auto',
              px: 3
            }
          }}
        >
          {newsCategories.map((category, index) => (
            <Tab
              key={category.id}
              icon={category.icon}
              label={category.label}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <MotionGrid
        container
        spacing={3}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {displayedArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <MotionCard
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  {article.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.summary}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccessTime sx={{ fontSize: 'small', mr: 1 }} />
                  <Typography variant="caption">{article.date}</Typography>
                  <Visibility sx={{ fontSize: 'small', ml: 2, mr: 1 }} />
                  <Typography variant="caption">{article.viewCount}</Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="small" color="primary">
                  Đọc thêm
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton
                  size="small"
                  onClick={() => toggleSaveArticle(article.id)}
                >
                  {savedArticles.includes(article.id) ? <Bookmark /> : <BookmarkBorder />}
                </IconButton>
                <IconButton size="small">
                  <Share />
                </IconButton>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </MotionGrid>

      {totalPages > 1 && (
        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size={isMobile ? "small" : "medium"}
          />
        </Box>
      )}
    </Container>
  );
};

export default NewsPage;
