import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutRunsInputSchema } from './DocumentUpdateWithoutRunsInputSchema';
import { DocumentUncheckedUpdateWithoutRunsInputSchema } from './DocumentUncheckedUpdateWithoutRunsInputSchema';

export const DocumentUpdateToOneWithWhereWithoutRunsInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutRunsInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutRunsInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutRunsInputSchema;
