import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerSelectSchema } from '../inputTypeSchemas/DocumentTriggerSelectSchema';
import { DocumentTriggerIncludeSchema } from '../inputTypeSchemas/DocumentTriggerIncludeSchema';

export const DocumentTriggerArgsSchema: z.ZodType<Prisma.DocumentTriggerDefaultArgs> = z.object({
  select: z.lazy(() => DocumentTriggerSelectSchema).optional(),
  include: z.lazy(() => DocumentTriggerIncludeSchema).optional(),
}).strict();

export default DocumentTriggerArgsSchema;
