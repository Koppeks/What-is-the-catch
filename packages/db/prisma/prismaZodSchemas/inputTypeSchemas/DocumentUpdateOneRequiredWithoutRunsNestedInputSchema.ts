import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutRunsInputSchema } from './DocumentCreateWithoutRunsInputSchema';
import { DocumentUncheckedCreateWithoutRunsInputSchema } from './DocumentUncheckedCreateWithoutRunsInputSchema';
import { DocumentCreateOrConnectWithoutRunsInputSchema } from './DocumentCreateOrConnectWithoutRunsInputSchema';
import { DocumentUpsertWithoutRunsInputSchema } from './DocumentUpsertWithoutRunsInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutRunsInputSchema } from './DocumentUpdateToOneWithWhereWithoutRunsInputSchema';
import { DocumentUpdateWithoutRunsInputSchema } from './DocumentUpdateWithoutRunsInputSchema';
import { DocumentUncheckedUpdateWithoutRunsInputSchema } from './DocumentUncheckedUpdateWithoutRunsInputSchema';

export const DocumentUpdateOneRequiredWithoutRunsNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutRunsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutRunsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutRunsInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutRunsInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutRunsInputSchema), z.lazy(() => DocumentUpdateWithoutRunsInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutRunsInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutRunsNestedInputSchema;
