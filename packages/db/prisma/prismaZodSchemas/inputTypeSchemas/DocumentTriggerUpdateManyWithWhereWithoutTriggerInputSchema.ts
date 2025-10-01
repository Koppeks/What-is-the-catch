import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentTriggerScalarWhereInputSchema } from './DocumentTriggerScalarWhereInputSchema';
import { DocumentTriggerUpdateManyMutationInputSchema } from './DocumentTriggerUpdateManyMutationInputSchema';
import { DocumentTriggerUncheckedUpdateManyWithoutTriggerInputSchema } from './DocumentTriggerUncheckedUpdateManyWithoutTriggerInputSchema';

export const DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema: z.ZodType<Prisma.DocumentTriggerUpdateManyWithWhereWithoutTriggerInput> = z.object({
  where: z.lazy(() => DocumentTriggerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DocumentTriggerUpdateManyMutationInputSchema),z.lazy(() => DocumentTriggerUncheckedUpdateManyWithoutTriggerInputSchema) ]),
}).strict() as z.ZodType<Prisma.DocumentTriggerUpdateManyWithWhereWithoutTriggerInput>;

export default DocumentTriggerUpdateManyWithWhereWithoutTriggerInputSchema;
