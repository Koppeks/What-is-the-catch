import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AnalysisRequestOrderByWithRelationInputSchema } from './AnalysisRequestOrderByWithRelationInputSchema';
import { TriggerHitOrderByRelationAggregateInputSchema } from './TriggerHitOrderByRelationAggregateInputSchema';

export const ClauseOrderByWithRelationInputSchema: z.ZodType<Prisma.ClauseOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  analysisRequestId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  triggerWarning: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  categories: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  analysisRequest: z.lazy(() => AnalysisRequestOrderByWithRelationInputSchema).optional(),
  hits: z.lazy(() => TriggerHitOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseOrderByWithRelationInput>;

export default ClauseOrderByWithRelationInputSchema;
