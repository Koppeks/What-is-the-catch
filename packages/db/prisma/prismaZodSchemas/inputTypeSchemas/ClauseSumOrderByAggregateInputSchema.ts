import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ClauseSumOrderByAggregateInputSchema: z.ZodType<Prisma.ClauseSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional(),
  riskScore: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseSumOrderByAggregateInput>;

export default ClauseSumOrderByAggregateInputSchema;
