import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentTriggerUpdateManyMutationInputSchema'
import { DocumentTriggerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedUpdateManyInputSchema'
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'

export const DocumentTriggerUpdateManyArgsSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyArgs> = z.object({
  data: z.union([ DocumentTriggerUpdateManyMutationInputSchema,DocumentTriggerUncheckedUpdateManyInputSchema ]),
  where: DocumentTriggerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateManyArgs>;

export default DocumentTriggerUpdateManyArgsSchema;
