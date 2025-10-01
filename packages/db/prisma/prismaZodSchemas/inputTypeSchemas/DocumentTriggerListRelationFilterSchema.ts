import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereInputSchema } from './DocumentTriggerWhereInputSchema';

export const DocumentTriggerListRelationFilterSchema: z.ZodType<Prisma.DocumentTriggerListRelationFilter> = z.object({
  every: z.lazy(() => DocumentTriggerWhereInputSchema).optional(),
  some: z.lazy(() => DocumentTriggerWhereInputSchema).optional(),
  none: z.lazy(() => DocumentTriggerWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentTriggerListRelationFilter>;

export default DocumentTriggerListRelationFilterSchema;
