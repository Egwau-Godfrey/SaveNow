import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AiInsightsCardProps {
  id?: string;
  title: string;
  description: string;
  category?: 'spending_analysis' | 'savings_optimization' | 'investment_advice' | 'cash_flow' | 'planning' | 'debt_management';
  priority?: 'low' | 'medium' | 'high';
  actionable?: boolean;
  potentialSavings?: number;
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'seasonal' | 'long_term';
  icon?: string;
  onPress?: () => void;
}

const AiInsightsCard: React.FC<AiInsightsCardProps> = (props) => {
  const getPriorityColor = (priorityLevel: string | undefined): string => {
    switch (priorityLevel) {
      case 'high':
        return '#FF6B6B';
      case 'medium':
        return '#4ECDC4';
      case 'low':
        return '#95E1D3';
      default:
        return '#4ECDC4';
    }
  };

  const formatSavings = (amount: number | undefined): string | null => {
    if (!amount || amount === 0) return null;
    return `Save UGX${amount.toLocaleString()}`; // Added locale formatting
  };

  const formatTimeframe = (timeframe: string | undefined): string | null => {
    if (!timeframe) return null;
    return timeframe.replace('_', ' ').toUpperCase();
  };

  const renderCardContent = () => {
    const priorityColor = getPriorityColor(props.priority);
    const savingsText = formatSavings(props.potentialSavings);
    const timeframeText = formatTimeframe(props.timeframe);

    return (
      <View style={[styles.card, { borderLeftColor: priorityColor }]}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{props.icon || '💡'}</Text>
          </View>
          <View style={styles.priorityContainer}>
            <View style={[styles.priorityBadge, { backgroundColor: priorityColor }]}>
              <Text style={styles.priorityText}>
                {props.priority ? props.priority.toUpperCase() : ''}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>{props.title}</Text>
        
        <Text style={styles.description} numberOfLines={2}>
          {props.description}
        </Text>

        <View style={styles.footer}>
          <View style={styles.metadataContainer}>
            {/* FIX: Only render savings if text exists */}
            {savingsText && (
              <View style={styles.savingsContainer}>
                <Text style={styles.savingsText}>
                  {savingsText}
                </Text>
              </View>
            )}
            
            {/* FIX: Only render timeframe if text exists */}
            {timeframeText && (
              <View style={styles.timeframeContainer}>
                <Text style={styles.timeframeText}>
                  {timeframeText}
                </Text>
              </View>
            )}
          </View>
          
          {props.actionable && (
            <View style={styles.actionableIndicator}>
              <Text style={styles.actionableText}>ACTION REQUIRED</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
        {renderCardContent()}
      </TouchableOpacity>
    );
  }

  return renderCardContent();
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    minHeight: 140,
    borderRadius: 16,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 16,
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
  },
  priorityContainer: {
    alignItems: 'flex-end',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priorityText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#7F8C8D',
    lineHeight: 20,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ECF0F1',
  },
  metadataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savingsContainer: {
    backgroundColor: '#E8F8F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  savingsText: {
    color: '#27AE60',
    fontSize: 12,
    fontWeight: 'bold',
  },
  timeframeContainer: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  timeframeText: {
    color: '#95A5A6',
    fontSize: 10,
    fontWeight: '600',
  },
  actionableIndicator: {
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFEAA7',
  },
  actionableText: {
    color: '#D68910',
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default AiInsightsCard;
export type { AiInsightsCardProps };