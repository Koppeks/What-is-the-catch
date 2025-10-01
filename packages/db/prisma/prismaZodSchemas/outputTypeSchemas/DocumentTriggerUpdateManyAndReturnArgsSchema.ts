import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentTriggerUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentTriggerUpdateManyMutationInputSchema'
import { DocumentTriggerUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentTriggerUncheckedUpdateManyInputSchema'
import { DocumentTriggerWhereInputSchema } from '../inputTypeSchemas/DocumentTriggerWhereInputSchema'

export const DocumentTriggerUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DocumentTriggerUpdateManyMutationInputSchema,DocumentTriggerUncheckedUpdateManyInputSchema ]),
  where: DocumentTriggerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateManyAndReturnArgs>;

export default DocumentTriggerUpdateManyAndReturnArgsSchema;
