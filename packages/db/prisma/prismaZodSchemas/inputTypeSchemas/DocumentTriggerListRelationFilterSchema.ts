import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerWhereInputSchema } from './DocumentTriggerWhereInputSchema';

export const DocumentTriggerListRelationFilterSchema: z.ZodType<Prisma.DocumentTriggerListRelationFilter> = z.strictObject({
  every: z.lazy(() => DocumentTriggerWhereInputSchema).optional(),
  some: z.lazy(() => DocumentTriggerWhereInputSchema).optional(),
  none: z.lazy(() => DocumentTriggerWhereInputSchema).optional(),
});

export default DocumentTriggerListRelationFilterSchema;
