import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { AnalysisRunOrderByWithRelationInputSchema } from './AnalysisRunOrderByWithRelationInputSchema';
import { ClauseOrderByWithRelationInputSchema } from './ClauseOrderByWithRelationInputSchema';
import { CategoryHitOrderByRelationAggregateInputSchema } from './CategoryHitOrderByRelationAggregateInputSchema';

export const ClauseAnalysisOrderByWithRelationInputSchema: z.ZodType<Prisma.ClauseAnalysisOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  runId: z.lazy(() => SortOrderSchema).optional(),
  clauseId: z.lazy(() => SortOrderSchema).optional(),
  severity: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional(),
  triggerWarnings: z.lazy(() => SortOrderSchema).optional(),
  run: z.lazy(() => AnalysisRunOrderByWithRelationInputSchema).optional(),
  clause: z.lazy(() => ClauseOrderByWithRelationInputSchema).optional(),
  categoryHits: z.lazy(() => CategoryHitOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseAnalysisOrderByWithRelationInput>;

export default ClauseAnalysisOrderByWithRelationInputSchema;
