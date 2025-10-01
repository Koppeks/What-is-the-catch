import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentUpdateManyMutationInputSchema } from '../inputTypeSchemas/DocumentUpdateManyMutationInputSchema'
import { DocumentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DocumentUncheckedUpdateManyInputSchema'
import { DocumentWhereInputSchema } from '../inputTypeSchemas/DocumentWhereInputSchema'

export const DocumentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DocumentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DocumentUpdateManyMutationInputSchema,DocumentUncheckedUpdateManyInputSchema ]),
  where: DocumentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() as z.ZodType<Prisma.DocumentUpdateManyAndReturnArgs>;

export default DocumentUpdateManyAndReturnArgsSchema;
