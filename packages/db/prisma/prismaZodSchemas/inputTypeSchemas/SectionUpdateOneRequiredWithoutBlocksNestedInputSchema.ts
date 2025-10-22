import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutBlocksInputSchema } from './SectionCreateWithoutBlocksInputSchema';
import { SectionUncheckedCreateWithoutBlocksInputSchema } from './SectionUncheckedCreateWithoutBlocksInputSchema';
import { SectionCreateOrConnectWithoutBlocksInputSchema } from './SectionCreateOrConnectWithoutBlocksInputSchema';
import { SectionUpsertWithoutBlocksInputSchema } from './SectionUpsertWithoutBlocksInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateToOneWithWhereWithoutBlocksInputSchema } from './SectionUpdateToOneWithWhereWithoutBlocksInputSchema';
import { SectionUpdateWithoutBlocksInputSchema } from './SectionUpdateWithoutBlocksInputSchema';
import { SectionUncheckedUpdateWithoutBlocksInputSchema } from './SectionUncheckedUpdateWithoutBlocksInputSchema';

export const SectionUpdateOneRequiredWithoutBlocksNestedInputSchema: z.ZodType<Prisma.SectionUpdateOneRequiredWithoutBlocksNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutBlocksInputSchema).optional(),
  upsert: z.lazy(() => SectionUpsertWithoutBlocksInputSchema).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SectionUpdateToOneWithWhereWithoutBlocksInputSchema), z.lazy(() => SectionUpdateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlocksInputSchema) ]).optional(),
});

export default SectionUpdateOneRequiredWithoutBlocksNestedInputSchema;
